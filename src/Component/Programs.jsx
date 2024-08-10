// import './Programs.css'
import '../Css/Programs.css'
import programs1 from "../assets/programs1.png";
import programs2 from "../assets/programs2.png";
import programs3 from "../assets/programs3.png";
function Programs() {
    return (
        <>
            <div id="programs_compo">
                <div className="container">
                    <h2>برامجنا</h2>
                    <div className="choices" >
                        <span>بناء العضلات</span>
                        <span >فقدان الوزن</span>
                        <span>اللياقة العامة</span>
                        <span>الصحة والعافية</span>
                    </div>
                    <div className='examples'>
                        <div>
                            <div className="content">
                                <img src={programs1} alt="" />
                                <p>برنامج تضخيم</p>
                                <p>مبتدئ <span>(عادي)</span></p>
                                <p>120 درهم</p>
                            </div>
                            <p>الاشتراك</p>
                        </div>

                        <div>
                            <div className="content">
                                <img src={programs2} alt="" />
                                <p>برنامج تضخيم</p>
                                <p>مبتدئ <span>(عادي)</span></p>
                                <p>120 درهم</p>
                            </div>
                            <p>الاشتراك</p>
                        </div>

                        <div>
                            <div className="content">
                                <img src={programs3} alt="" />
                                <p>برنامج تضخيم</p>
                                <p>مبتدئ <span>(عادي)</span></p>
                                <p>120 درهم</p>
                            </div>
                            <p>الاشتراك</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Programs;