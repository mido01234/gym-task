// import './rating.css'
import "../Css/rating.css";
import stars from "../assets/stars.png";
import person from "../assets/person.png";
function Rating() {
  return (
    <>
      <div id="rating_compo">
        <div className="container">
          <h2>التقييمات</h2>
          <div className="grid">
            <div className="cell">
              <div className="profile">
                <img src={person} alt="person" />
                <div className="name">
                  <h4>خالد حسن</h4>
                  <img src={stars} alt="stars" />
                </div>
              </div>
              <p>
                برنامج الصحة والعافية غير حياتي بالكامل . تمارين اليوغا والتأمل
                ساعدتني في التخلص من التوتر والقلق. شكراً لكم
              </p>
            </div>

            <div className="cell">
              <div className="profile">
                <img src={person} alt="person" />
                <div>
                  <h4>محمد سعد </h4>
                  <img src={stars} alt="stars" />
                </div>
              </div>
              <p>
                لقد جربت العديد من البرامج، ولكن برنامج الكارديو المنزلي كان
                الأفضل. مناسب لمن لا يملكون وقتاً كافياً للذهاب إلى الجيم
              </p>
            </div>

            <div className="cell">
              <div className="profile">
                <img src={person} alt="person" />
                <div>
                  <h4> سالم احمد</h4>
                  <img src={stars} alt="stars" />
                </div>
              </div>
              <p>
                برنامج بناء العضلات كان رائعاً! لاحظت تحسن كبير في قوتي وكتلة
                عضلاتي في فترة قصيرة
              </p>
            </div>

            <div className="cell">
              <div className="profile">
                <img src={person} alt="person" />
                <div>
                  <h4>خليفة محمد </h4>
                  <img src={stars} alt="stars" />
                </div>
              </div>
              <p>
                برامج اللياقة العامة حقاً شاملة ومتنوعة. أحببت تنوع التمارين
                والمرونة في الجدول. أشعر الآن بأنني أكثر نشاطاً وصحة.
              </p>
            </div>
            <div className="button-container">
              <button className="center-button">عرض الكل</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rating;
