export async function fecth_one_answer_faq(id: number) {
    try {
        const res = await fetch(`/api/faq/answer/${id}`);
        if (!res.ok) {
            throw new Error("Answer not found");
        }
        return await res.json();
    } catch (err) {
        console.error(err);
    }
}