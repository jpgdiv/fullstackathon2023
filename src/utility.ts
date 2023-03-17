

export function getQuestions(all_categories: string[], used_categories: string[]) {

    function getUniqueQuestion(all_cat_filtered: string[], list: string[]): string {
        const initiator = Number(Math.floor(Math.random() * all_cat_filtered.length))
        const newOption = all_cat_filtered[initiator];

        return list.includes(newOption) ? getUniqueQuestion(all_cat_filtered, list) : newOption;
    }

    const result = used_categories.reduce((prev, cur) => {
        const all_cat_filtered = all_categories.filter(cat => cat !== cur);

        const list: string[] = [];
        for (let i = 0; i < used_categories.length; i++) {


            list.push(getUniqueQuestion(all_cat_filtered, list))
        }
        list.push(cur);

        list.sort(() => Math.random() > Math.random() ? -1 : 1)

        return { ...prev, [cur]: list }
    }, {})

    return result
}
