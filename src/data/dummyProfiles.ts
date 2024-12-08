interface Profile {
    id: number;
    name: string;
    age: number;
    // Add other profile properties as needed
}

const dummyProfiles: Profile[] = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 28 },
  { id: 4, name: 'Diana', age: 22 },
  { id: 5, name: 'Ethan', age: 35 },
  // Add more profiles as needed
];

export default dummyProfiles;
