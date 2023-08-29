export const handler = async (event) => {
    const savedEvents = event.Records;
    console.log(savedEvents);
    const listEvents = savedEvents.map(savedEvent => sum(savedEvent));
    const result = await Promise.allSettled(listEvents);
    const batchItemFailures = result.filter(
        (item) => item.status === 'rejected').map(
            item => ({ itemIdentifier: item.reason }))
    console.log(batchItemFailures);
    return { batchItemFailures };
};

async function sum(number) {
    const numbers = JSON.parse(number.body);
    const result = numbers.val1 + numbers.val2;
    if (result % 2 == 0) {
        return result;
    } else {
        throw number.messageId;
    }
}