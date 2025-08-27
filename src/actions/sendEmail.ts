import axios from "axios";

export async function SendEmailTo({
    formData
}: {
    formData: {
        name: string;
        email: string;
        message: string;
    }
}) {
    try {

        const response = await axios.post("api/contact", formData);
        return response.data;

    } catch (error: unknown) {
        console.log("Error while sending email: ", error);
        if (axios.isAxiosError(error)) {
            console.error("Error sending email:", error);
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    return {
                        success: false,
                        message: error.response?.data?.message || "An error occurred while sending the email."
                    };
                }
                if (error.request) {
                    return {
                        success: false,
                        message: "No response from server. Please check your internet!"
                    }
                }
            }
            return {
                success: false,
                message: "Error while sending email!"
            }
        }
    }
}