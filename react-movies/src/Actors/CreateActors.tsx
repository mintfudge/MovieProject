import ActorsForm from "./ActorsForm";

export default function CreateActors() {
  return (
    <>
      <h3>Create Actors</h3>

      <ActorsForm model={{name: '', dateOfBirth: undefined}} 
        onSubmit={(values) => console.log(values)}
      />
    </>
  )
}
