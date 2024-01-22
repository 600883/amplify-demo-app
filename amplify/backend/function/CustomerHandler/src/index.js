exports.handler = async (event) => {
    console.log(event);
    const customerId = event.pathParameters.customerId;
    // if you have a database with data, you can use it here, sql query for example
    const customer = {'customerId': customerId, 'customerName': "Customer " + customerId };
    const response = {
        statusCode: 200,
        // Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
      },
      body: JSON.stringify(customer),
    };
    return response;
};
