import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "الأسئلة الشائعة",
    rows: [
        {
            title: "هل يجب ان اكون مسجل في النظام للاطلاع علي الخدمات؟",
            content: `حاليا لا توجد رسوم علي الانشطة التجارية والصناعية توجد فقط رسوم شهادة الاستيراد وتخليص المواد من منافذ الدولة.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        }
    ],
};

const styles = {
    titleTextColor: "#c9a869",
    rowTitleColor: "#c9a869",
    rowContentPaddingBottom: '15px',
    rowContentPaddingLeft: '40px',
    rowContentColor: 'grey',
    arrowColor: "#c9a869",
};

const config = {
    animate: true,
    // arrowIcon: "Accordion-icon rotate-icon",
    tabFocus: true
};

const FaqComponent= () => {
    return (
        <div class='container pad-t'>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}

export default FaqComponent;