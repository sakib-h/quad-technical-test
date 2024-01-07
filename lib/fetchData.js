export default async function fetchData() {
    const data = await fetch(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
    ).then((res) => res.json());

    return data;
}
