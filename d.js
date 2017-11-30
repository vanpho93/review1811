const item = `<item>
<title>Trạng nguyên đầu tiên của nền khoa cử Việt Nam</title>
<description>
<![CDATA[
<a href="https://vnexpress.net/tin-tuc/giao-duc/trac-nghiem/trang-nguyen-dau-tien-cua-nen-khoa-cu-viet-nam-3676962.html"><img width=130 height=100 src="https://i-vnexpress.vnecdn.net/2017/11/28/trangnguyenLeVanThinhJPG-15118-6348-2039-1511859903_180x108.jpg" ></a></br>Nền khoa bảng Việt Nam bắt đầu từ năm 1075 với khoa thi Tam thường của triều Lý. Nho sĩ quê Bắc Ninh đỗ đầu, sau làm đến Thái sư.
]]>
</description>
<pubDate>Thu, 30 Nov 2017 19:00:00 +0700</pubDate>
<link>
https://vnexpress.net/tin-tuc/giao-duc/trac-nghiem/trang-nguyen-dau-tien-cua-nen-khoa-cu-viet-nam-3676962.html
</link>
<guid>
https://vnexpress.net/tin-tuc/giao-duc/trac-nghiem/trang-nguyen-dau-tien-cua-nen-khoa-cu-viet-nam-3676962.html
</guid>
<slash:comments>0</slash:comments>
</item>
<item>
<title>Apple đã 'dụ dỗ' người mua thế nào</title>
<description>
<![CDATA[
<a href="https://sohoa.vnexpress.net/tin-tuc/san-pham/apple-da-du-do-nguoi-mua-the-nao-3677996.html"><img width=130 height=100 src="https://i-sohoa.vnecdn.net/2017/11/30/a1-2305-1512031075_180x108.jpg" ></a></br>Sự cuốn hút của hệ sinh thái Apple đã khiến những người mua iPhone X tốn thêm cả nghìn USD cho phụ kiện đi kèm.
]]>
</description>
<pubDate>Thu, 30 Nov 2017 19:00:00 +0700</pubDate>
<link>
https://sohoa.vnexpress.net/tin-tuc/san-pham/apple-da-du-do-nguoi-mua-the-nao-3677996.html
</link>
<guid>
https://sohoa.vnexpress.net/tin-tuc/san-pham/apple-da-du-do-nguoi-mua-the-nao-3677996.html
</guid>
<slash:comments>0</slash:comments>
</item>`

function getBody(str, pre, post) {
    const startIndex = str.indexOf(pre) + pre.length;
    const endIndex = str.indexOf(post, startIndex + 1);
    return str.substring(startIndex, endIndex).trim();
}

function getTinFromText(text) {
    const title = getBody(text, '<title>', '</title>');
    const link = getBody(text, '<link>', '</link>');
    const image = getBody(text, 'height=100 src="', '" ></a></br>');
    const description = getBody(text, '</a></br>', ']]>');
    const id = link.substr(link.length - 12, 7);
    return { title, link, image, description, id };
}

console.log(getTinFromText(item));
