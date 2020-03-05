export async function get() {
    const reponse = await fetch(`${process.env.PUBLIC_URL}/infections-norway.csv`);
    const data = await reponse.text();
    return data
}

export async function getJsonData() {
    const reponse = await fetch(`${process.env.PUBLIC_URL}/norway.json`);
    const data = await reponse.json();
    return data
}