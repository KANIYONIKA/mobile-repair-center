export function formatDate(date: Date): string {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
}

// 使用例
const date = new Date();
const formattedDate = formatDate(date);
console.log(formattedDate); // "2024-05-26" のような形式で出力
