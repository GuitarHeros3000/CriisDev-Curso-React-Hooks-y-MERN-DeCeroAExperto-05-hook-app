import { useLayoutEffect, useRef, useState } from "react"

export const PokemonCard = ({ id, name, sprites = [] }) => {

    const sectionRef = useRef();

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { height, width } = sectionRef.current.getBoundingClientRect();
        setBoxSize({
            height, 
            width
        });
    }, [sprites])

    return (
        <>
            <section
                style={{ height: 200, display: 'flex' }}
                ref={sectionRef}
            >
                <h2
                    className="text-capitalize"
                >#{id} - {name}</h2>

                {/* Imágenes */}
                <div>
                    {
                        sprites.map((sprite) => (
                            <img key={sprite} src={sprite} alt={name} />
                        ))
                    }
                </div>
            </section>

            <code>
                {JSON.stringify(boxSize)}
            </code>
        </>
    )
}
