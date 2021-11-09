import ActorsForm from "./ActorsForm"

export default function EditActors() {
  return (
    <>
      <h3>Edit</h3>
      <ActorsForm model={{name: 'Judy Garland', 
      dateOfBirth: new Date('1922-06-10T00:00:00'),
      biography: `Judy was born in 
      **USA**`,
      pictureURL: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/JUDYGarland.jpg',
    }} 
      onSubmit={(values) => console.log(values)}
      />
    </>
  )
}
