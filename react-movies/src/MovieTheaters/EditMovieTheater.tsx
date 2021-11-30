import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater(){
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm 
                model={{name: 'IMAX Palladium', 
                latitude: -25.477656128899966, 
                longitude: -49.29094507432547}}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}