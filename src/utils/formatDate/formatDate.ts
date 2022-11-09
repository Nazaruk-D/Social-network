export const formatDate = (date: any): string => {
    return new Date(date).toLocaleDateString('ru', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    })
}