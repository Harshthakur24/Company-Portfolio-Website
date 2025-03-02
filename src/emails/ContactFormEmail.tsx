import {
    Html,
    Body,
    Container,
    Tailwind,
    Text,
    Heading,
    Section,
    Link,
    Hr,
} from '@react-email/components'

interface ContactFormEmailProps {
    formData: {
        ownerName: string
        email: string
        phoneNumber: string
        vehicle?: string
        message?: string
        formSource: string
    }
}

export default function ContactFormEmail({ formData }: ContactFormEmailProps) {
    return (
        <Html>
            <Tailwind>
                <Body className="bg-gray-50">
                    <Container className="mx-auto py-12">
                        <Section className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 max-w-xl mx-auto">
                            {/* Header */}
                            <Heading className="text-3xl font-bold text-center text-gray-900 mb-2">
                                New Contact Request
                            </Heading>
                            <Text className="text-gray-500 text-center mb-6">
                                Received from {formData.formSource}
                            </Text>
                            <Hr className="border-gray-200 my-6" />

                            {/* Contact Details */}
                            <Section className="mb-8">
                                <div className="grid gap-4">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <Text className="text-sm text-gray-500 mb-1">Name</Text>
                                        <Text className="text-base font-medium text-gray-900">{formData.ownerName}</Text>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <Text className="text-sm text-gray-500 mb-1">Email</Text>
                                        <Link href={`mailto:${formData.email}`} className="text-base font-medium text-blue-600">
                                            {formData.email}
                                        </Link>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <Text className="text-sm text-gray-500 mb-1">Phone</Text>
                                        <Link href={`tel:${formData.phoneNumber}`} className="text-base font-medium text-blue-600">
                                            {formData.phoneNumber}
                                        </Link>
                                    </div>

                                    {formData.vehicle && (
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <Text className="text-sm text-gray-500 mb-1">Vehicle Details</Text>
                                            <Text className="text-base font-medium text-gray-900">{formData.vehicle}</Text>
                                        </div>
                                    )}

                                    {formData.message && (
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <Text className="text-sm text-gray-500 mb-1">Message</Text>
                                            <Text className="text-base text-gray-900 whitespace-pre-wrap">{formData.message}</Text>
                                        </div>
                                    )}
                                </div>
                            </Section>

                            <Hr className="border-gray-200 my-6" />

                            {/* Footer */}
                            <Text className="text-sm text-center text-gray-500">
                                This is an automated email from Black Mining Contact Form.
                                <br />
                                Received on {new Date().toLocaleDateString()}
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
} 