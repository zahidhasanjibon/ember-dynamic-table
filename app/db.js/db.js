/* eslint-disable prettier/prettier */
export default [
  {
    id: 'zakat',
        tableColumn:['ID','name','address','phone','country'],
    data:  [
        {_id:1,
          name:'md karim',
          address:'dhaka',
          phone:'01732432',
          country:'bangladesh',
        },
        {_id:2,
          name:'md rahim',
          address:'dhaka',
          phone:'01732432',
          country:'bangladesh',
        },
        {_id:3,
          name:'md kamal',
          address:'dhaka',
          phone:'01732432',
          country:'london',
        },
      ]
    
  },
  {
    id: 'loan',
    tableColumn:['ID','amount','due','debit','credit'],
    data:[
        {_id:1,
          amount:'30000',
          due:'3454 ',
          debit:'01732432',
          credit:'345325',
        },
        {_id:2,
          amount:'234324',
          due:'3243',
          debit:'01732432',
          credit:'324324',
        },
        {_id:3,
          amount:'324324',
          due:'234324',
          debit:'01732432',
          credit:'345425',
        },
      ],
  },
  {
    id: 'medical',
    tableColumn:['ID','name','location','paid','cost'],
    data:[
        {_id:1,
          name:'hospital 1',
          location:'dhaka',
          paid:'yes',
          cost:'345325',
        },
        {_id:2,
            name:'hospital 2',
            location:'dhaka',
            paid:'yes',
            cost:'34523425',
          },
          {_id:3,
            name:'hospital 3',
            location:'dhaka',
            paid:'no',
            cost:'345300025',
          },
      ],
  },
  {
    id: 'education',
    tableColumn:['ID','institute','location','level','cost'],
    data:[
        {_id:1,
          name:'school 1',
          location:'dhaka 1',
          level:'yes',
          cost:'345325',
        },
        {_id:2,
            name:'school 2',
            location:'dhaka 2',
            level:'yes',
            cost:'345325',
          },
          {_id:3,
            name:'school 3',
            location:'dhaka 3',
            level:'yes',
            cost:'345325',
          },
      ],
  },
  {
    id: 'family',
    tableColumn:['ID','name','members','country','city'],
    data:[
        {_id:1,
          name:'family 1',
          members:'4',
          country:'bangladesh',
          city:'dhaka',
        },
        {_id:2,
          name:'family 2',
          members:'43',
          country:'bangladesh',
          city:'khulna',
        },
        {_id:3,
          name:'family 3',
          members:'44',
          country:'bangladesh',
          city:'kushtia',
        },
      ],
  },
];
