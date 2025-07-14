import axiosInstance from "./axiosInstance";

const pdfService = {
    downloadPdfWithProgress: async (scheduleId, onProgress) => {
        try {
            const response = await axiosInstance.get(`/schedule/${scheduleId}/pdf`, {
                responseType: 'blob',
                onDownloadProgress: (progressEvent) => {
                    if (onProgress && progressEvent.total) {
                        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        onProgress(percentCompleted);
                    }
                }
            });

            // Check if response is actually a PDF
            if (response.data.type !== 'application/pdf') {
                throw new Error('Response is not a PDF file');
            }

            const url = window.URL.createObjectURL(response.data);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `schedule-${scheduleId}.pdf`);
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            window.URL.revokeObjectURL(url);
            
            return { success: true, message: 'PDF downloaded successfully' };
            
        } catch (error) {
            console.error('PDF download error:', error);
            throw new Error(`Failed to download PDF: ${error.message}`);
        }
    }
}

export default pdfService;