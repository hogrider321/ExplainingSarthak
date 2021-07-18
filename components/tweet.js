import Link from "next/link"

export default function Tweet(props) {
    let text = props.text;
    let url = props.url; 

    return (
        <>
            <Link href={url}>
                <p>{text}</p>
            </Link>
            <br />
        </>
    )
}