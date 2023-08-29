export const lambdaHandler = async (event) => {
    try {
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'hello world',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};

// const sum = num1 + num2;
// if(sum % 2 == 0) {
//     return 0;
// } else {
//     return -1;
// }