export default function ({
    store,
    redirect,
}) {
    if (localStorage.getItem("userType") != 'Admin') {
        return redirect('/')
    }
}