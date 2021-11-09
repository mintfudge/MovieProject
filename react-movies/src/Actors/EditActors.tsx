import { ActorsForm } from './ActorsForm'

export default function EditActors() {
  return (
    <>
      <h3>Edit</h3>
      <ActorsForm model={{name: 'Judy Garland', 
      dateOfBirth: new Date('1922-06-10T00:00:00')}} 
        onSubmit={(values) => console.log(values)}
      />
    </>
  )
}
