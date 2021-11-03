import { gql } from '@apollo/client';

// export const EXCHANGE_RATES = gql`
// query GetExchangeRates {
//   rates(currency: "USD") {
//     currency
//     rate
//   }
// }
// `;

export const LIST_EMPLOYEE = gql`
query GetListEmployee {
  listEmployee {
    data
    count
  }
}
`;

export const LOGIN = gql`
mutation {
  login ( email: "admin.hubspire@gmail.com", password: "admin123" )
	{
    user {
      fullName
    }
    token
  }
}
`;

export const LIST_ROLE = gql`
query GetlistRole {
  listRole {
    name
  }
}
`;