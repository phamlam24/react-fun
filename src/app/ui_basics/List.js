import ProfileProps from "./ProfileProps"

const people = [
    {
        id: 0, // used in JSX as a key
        name: 'Lin Lanying',
        fileName: '/lin_lanying.jpg',
        size: 100,
    },
    {
        id: 1,
        name: 'Katsuko Saruhashi',
        fileName: '/katsuko_saruhashi.jpg',
        size: 120,
    }
]

export default function List(){
    const listItems = people.map(person => 
        <li key={person.id}>
            <ProfileProps 
                person= {{
                    name: person.name,
                    fileName: person.fileName
                }}
                size={person.size}
            />
        </li>
    )

    console.log(listItems)

    return <ul className="flex flex-row [&>*]:m-4">{listItems}</ul>;
}