export default function Footer() {
    const now = new Date()
    return (
        <footer>
            &copy; {now.toISOString()}
        </footer>
    )
}