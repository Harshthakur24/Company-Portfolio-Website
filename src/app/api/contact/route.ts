import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import ContactFormEmail from '../../../emails/ContactFormEmail'

// Prevent multiple instances in development
declare global {
  var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') global.prisma = prisma

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { ownerName, phoneNumber, email, vehicle, message, formSource = 'website' } = body

    // Validate required fields
    if (!ownerName || !phoneNumber || !email) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Run database and email operations concurrently
    const [contact] = await Promise.all([
      prisma.contact.create({
        data: {
          ownerName: ownerName.trim(),
          phoneNumber: phoneNumber.trim(),
          email: email.toLowerCase().trim(),
          vehicle: vehicle?.trim(),
          message: message?.trim(),
          formSource,
        },
      }),
      resend.emails.send({
        from: 'Black Mining <no-reply@ecoelv.in>',
        to: process.env.CONTACT_EMAIL || '',
        subject: `New Contact Request - ${ownerName}`,
        react: ContactFormEmail({
          formData: { ownerName, email, phoneNumber, vehicle, message, formSource }
        })
      }).catch(error => {
        console.error('Email sending failed:', error)
        return null // Don't fail the request if email fails
      })
    ])

    return NextResponse.json({ 
      success: true, 
      data: contact 
    }, { status: 201 })

  } catch (error) {
    console.error('Request error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to process request' 
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
} 