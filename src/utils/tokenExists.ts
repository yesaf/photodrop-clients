export default function tokenExists(): boolean {
    return !!localStorage.getItem('token');
}
