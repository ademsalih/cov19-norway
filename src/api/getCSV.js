export async function get() {

    const reponse = await fetch(`${process.env.PUBLIC_URL}/infections-norway.csv`);
    const data = await reponse.text();

    return data
}