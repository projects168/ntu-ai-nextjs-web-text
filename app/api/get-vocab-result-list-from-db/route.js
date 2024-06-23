import db from "@/services/firebase-db";

export async function GET() {
    const dataList = [];
    // 從Firestore(db)取得集合內的全部文件
    const docList = await db.collection("vocab-result-list").orderBy("createdAt", "desc").get();
    // 逐一取出文件
    docList.forEach(doc => {
        // doc.data()將文件轉為JS物件
        const data = doc.data();
        // 將文件的id作為物件的id
        data.id = doc.id;
        // 將文件加到dataList內
        dataList.push(data);
    });
    return Response.json({
        dataList
    });
}