function Titulo(titulo) {

    return (

        <>
            {/*Titulo Principal */}
            <div className="flex justify-center w-full mt-20 mb-10">
                <h1 className="text-5xl text-center font-bold font-serif break-words max-sm:text-4xl">{titulo.titulo}</h1>
            </div>
        </>

    );

}

export default Titulo;