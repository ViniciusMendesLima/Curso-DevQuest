interface ICustomer {
  name: string;
  age: number;
}

interface IAdress {
  street: string;
}
interface ICustomerProfile extends ICustomer, IAdress {}

const newProfile: ICustomerProfile = {
  name: "Vinicius",
  age: 34,
  street: "Rua zzz",
};

type TCustomer = {
  name: string;
  age: number;
};

type TAdress = {
  street: string;
};

type TCustomerProfile = TCustomer & TAdress;

const newProfile2: TCustomerProfile = {
  name: "Vinicius",
  age: 34,
  street: "Rua zzz",
};
