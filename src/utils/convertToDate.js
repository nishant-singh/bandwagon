export default dateString => {
    let date =  new Date(dateString);
    return date.toDateString() + ", " +date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}