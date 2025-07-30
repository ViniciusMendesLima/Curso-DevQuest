type Customer = {
    name: string;
    age: number;
}

function showCustomerInfo(customer: Customer){
    console.log(`o nome do cliente é: ${customer.name}`);
    console.log(`o idade do cliente é: ${customer.age}`);

    
}