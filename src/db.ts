interface IItem {
  id: string;
  name: string;
  description: string;
}

interface IDbValues {
  items: IItem[];
}

export const db: () => Promise<IDbValues> = () =>
  new Promise((resolve) => {
    resolve({
      items: [
        {
          id: "1",
          name: "Test Name",
          description: "Test Description",
        },
        {
          id: "2",
          name: "It is banner 2",
          description: "Description of banner number 2",
        },
        {
          id: "3",
          name: "ya krevedko",
          description: "Test Description",
        },
      ],
    });
  });
