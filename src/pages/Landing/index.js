import Layout from "../../layout/Gurst";
import Header from "./Header";
import SectionProducts from "./SectionProducts";
import SectionContact from "./SectionContact";
import SectionHero from "./SectionHero";
import Footer from "./Footer";

const Page = () => {
    return (
        <Layout>
            <Header />

            <SectionHero />

            <SectionContact />

            <SectionProducts />

            <Footer />
        </Layout>
    );
};

export default Page;

// html js css
// Tiêu đề in đậm thì nên xài  h1, h2, h3, h4, h5, h6
// 1 trang  chỉ nên có 1 h1
// phân định trong component đó đâu là header, main, footer
// sử dụng đúng thẻ trogn từng trường hợp. E.g: Location, thẻ a.

//CSS
// Tập sử dụng grid nhiều hơn, hạn chế sử dụng flex.
// nên có một cấu trúc nhất định

//JS
// tập làm quen với let và const
// sử dụng forEach, map, filter, find cho array
// điểm khác biệt giữa for và forEach
// sử dụng arrow function
// sử dụng ...
// sử dụng cấu trúc để phân rã dữ liệu
// môt component chỉ nên làm một việc duy nhất
// nắm vững về object và arry

//React
// cấu trúc của một dự án react
// cách để tạo một component đơn giản
// hiểu rõ quy định về cách đặt tên
// hiểu về useState, useEffect, useMemo.
// hiểu về những event của thẻ html
// hiểu cách viết css bằng styled component
// hiểu cách truyền dữ liệu giữa các component khác nhau         <=(quan trọng)
// hiểu cơ bản về react - router
// tập sử dụng component quan trọng trong ant design
// biết cách gọi API và sử dụng dữ liệu API

// NÂNG CAO REACT
// useContext và redux
// học về cách tạo hook
