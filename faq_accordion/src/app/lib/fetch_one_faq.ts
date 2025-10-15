export async function fetchOneFaq(id: number) {
    try {
        const res = await fetch(`/api/faq/${id}`);
        if (!res.ok) throw new Error("FAQ not found");
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
}
