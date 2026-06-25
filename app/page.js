const services = [
  {
    title: "基础香氛洗护",
    description: "温和沐浴、耳眼清洁、脚底毛修理、指甲打磨和蓬松吹干。",
    price: "¥88起",
    duration: "约 60-90 分钟",
    image:
      "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=900&q=85",
    alt: "小狗洗护服务",
  },
  {
    title: "精致造型修剪",
    description: "适合贵宾、比熊、雪纳瑞等造型犬种，包含洗护和全身造型。",
    price: "¥168起",
    duration: "约 120 分钟",
    image:
      "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&w=900&q=85",
    alt: "宠物美容修剪",
  },
  {
    title: "猫咪舒缓精洗",
    description: "低刺激洗护、控温吹干、轻柔梳毛，减少猫咪紧张感。",
    price: "¥138起",
    duration: "约 90 分钟",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=85",
    alt: "猫咪洗护服务",
  },
];

const advantages = [
  {
    icon: "洗",
    title: "分区洗护",
    description: "猫犬分时段、分工具护理，降低气味和环境压力。",
  },
  {
    icon: "温",
    title: "恒温烘干",
    description: "使用低噪音烘干设备，按毛量和耐受度调整风温。",
  },
  {
    icon: "检",
    title: "护理前检查",
    description: "记录皮肤、耳道、脚垫和打结情况，及时同步给主人。",
  },
  {
    icon: "照",
    title: "透明反馈",
    description: "护理结束发送照片和建议，方便持续管理宠物状态。",
  },
];

const testimonials = [
  {
    comment: "第一次带奶茶来洗护，美容师很耐心，结束后还发了耳朵和脚垫的护理建议。",
    owner: "林小姐",
    pet: "奶茶",
  },
  {
    comment: "糯米平时很怕吹风，这次状态稳定很多，毛也吹得蓬松干净。",
    owner: "周先生",
    pet: "糯米",
  },
  {
    comment: "预约沟通很清楚，修剪出来的脸型很可爱，回家后香味也不刺鼻。",
    owner: "陈女士",
    pet: "可乐",
  },
  {
    comment: "店里没有刺鼻味道，等候区也很干净。小布第一次不发抖，回来一路都很放松。",
    owner: "黄女士",
    pet: "小布",
  },
  {
    comment: "美容师会先确认皮肤和打结情况，不会硬梳。团子的耳后结处理得很细，价格也透明。",
    owner: "许先生",
    pet: "团子",
  },
  {
    comment: "猫咪洗护过程有照片同步，能看到它状态很好。回家后毛顺了很多，香味很自然。",
    owner: "沈小姐",
    pet: "豆花",
  },
  {
    comment: "之前在别处剪得不太顺，这次造型沟通很仔细，腿型和脸型都修得很清爽。",
    owner: "罗先生",
    pet: "摩卡",
  },
  {
    comment: "高龄犬护理很温柔，中途会让它休息。洗完脚垫也修干净了，走路舒服很多。",
    owner: "吴阿姨",
    pet: "豆豆",
  },
];

const testimonialLoop = [...testimonials, ...testimonials];

const gallery = [
  {
    src: "assets/shop-reception.png",
    alt: "高端宠物洗护店前台接待与等候区",
  },
  {
    src: "assets/shop-wash-area.png",
    alt: "高端宠物洗护店专业洗护区",
  },
  {
    src: "assets/shop-grooming-room.png",
    alt: "高端宠物洗护店烘干美容护理区",
  },
];

export default function Home() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="泡泡爪印宠物洗护店首页">
          <span className="brand-mark">爪</span>
          <span>泡泡爪印</span>
        </a>
        <nav className="nav" aria-label="主导航">
          <a href="#services">服务</a>
          <a href="#why">护理优势</a>
          <a href="#booking">预约</a>
          <a href="#contact">联系</a>
        </nav>
        <a className="book-link" href="#booking">
          立即预约
        </a>
      </header>

      <main id="home">
        <section className="hero">
          <div>
            <p className="eyebrow">宠物洗护 · 美容 · 舒缓护理</p>
            <h1>让毛孩子干净、轻松、香香回家。</h1>
            <p className="hero-copy">
              泡泡爪印为猫咪和狗狗提供温和洗护、造型修剪、除结护理和皮毛养护。独立烘干间、透明护理流程，让每一次洗澡都更安心。
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#booking">
                预约洗护
              </a>
              <a className="secondary-btn" href="#services">
                查看套餐
              </a>
            </div>
            <div className="stats" aria-label="门店数据">
              <div className="stat">
                <strong>4.9</strong>
                <span>顾客平均评分</span>
              </div>
              <div className="stat">
                <strong>30min</strong>
                <span>到店基础检查</span>
              </div>
              <div className="stat">
                <strong>1v1</strong>
                <span>单宠独立护理</span>
              </div>
            </div>
          </div>
          <div className="hero-photo">
            <img
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1100&q=85"
              alt="刚洗护完成的狗狗"
            />
            <form className="quick-booking" aria-label="快速预约">
              <div className="quick-booking-head">
                <strong>快速预约</strong>
                <span>留下基础信息，我们尽快联系确认。</span>
              </div>
              <div className="quick-form-grid">
                <label>
                  联系人
                  <input type="text" placeholder="您的称呼" />
                </label>
                <label>
                  手机号
                  <input type="tel" placeholder="138 0000 0000" />
                </label>
              </div>
              <label>
                期望到店时间
                <input type="text" defaultValue="2026年6月26日 09:30" />
              </label>
              <div className="quick-form-grid">
                <label>
                  宠物类型
                  <select defaultValue="">
                    <option value="" disabled>
                      请选择
                    </option>
                    <option>狗狗</option>
                    <option>猫咪</option>
                    <option>其他小宠</option>
                  </select>
                </label>
                <label>
                  服务项目
                  <select defaultValue="">
                    <option value="" disabled>
                      请选择
                    </option>
                    <option>基础香氛洗护</option>
                    <option>精致造型修剪</option>
                    <option>猫咪舒缓精洗</option>
                    <option>除结护理</option>
                  </select>
                </label>
              </div>
              <label>
                备注
                <textarea placeholder="宠物年龄、性格、皮肤敏感或其他需求" />
              </label>
              <button className="quick-submit" type="button">
                提交预约信息
              </button>
            </form>
          </div>
        </section>

        <section id="services" className="services">
          <div className="section-head">
            <h2>常选洗护套餐</h2>
            <p>
              根据宠物体型、毛量和性格调整护理节奏。到店后先做基础皮毛检查，再确认最终方案。
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <img src={service.image} alt={service.alt} />
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="price">
                    <span>{service.price}</span>
                    <small>{service.duration}</small>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="why" className="why">
          <div className="why-layout">
            <div className="why-photo">
              <img
                src="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=1000&q=85"
                alt="美容师照顾宠物"
              />
            </div>
            <div>
              <div className="section-head section-head-compact">
                <h2>把安全感放在第一位</h2>
              </div>
              <div className="why-grid">
                {advantages.map((item) => (
                  <article className="why-card" key={item.title}>
                    <div className="icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials" aria-label="客户评价">
          <div className="section-head">
            <h2>客户评价</h2>
            <p>来自近期到店的主人反馈，记录毛孩子洗护后的真实体验。</p>
          </div>
          <div className="testimonial-viewport">
            <div className="testimonial-track">
              {testimonialLoop.map((item, index) => (
                <article className="testimonial-card" key={`${item.owner}-${item.pet}-${index}`}>
                  <div className="stars" aria-label="五星评价">
                    ★★★★★
                  </div>
                  <p>“{item.comment}”</p>
                  <div className="testimonial-author">
                    <strong>{item.owner}</strong>
                    <span>{item.pet} 的主人</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="booking">
          <div className="booking-wrap">
            <div className="booking-intro">
              <p className="eyebrow">预约到店</p>
              <h2>告诉我们宠物情况，预留合适的护理时间。</h2>
              <p>
                可通过电话、微信或到店沟通预约，我们会根据宠物状态安排合适的护理时段。
              </p>
              <div className="hours">
                <div>
                  <strong>周一至周五</strong>
                  <span>10:00 - 20:00</span>
                </div>
                <div>
                  <strong>周六至周日</strong>
                  <span>09:30 - 21:00</span>
                </div>
                <div>
                  <strong>门店地址</strong>
                  <span>上海市静安区花园路 88 号</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery" aria-label="店铺护理环境">
          <div className="gallery-track">
            {gallery.map((image) => (
              <img src={image.src} alt={image.alt} key={image.src} />
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-head">
            <h2>欢迎带毛孩子来体验</h2>
            <p>
              建议提前预约，胆小或高龄宠物可备注护理习惯，我们会安排更安静的时段。
            </p>
          </div>
          <div className="contact-location">
            <div className="contact-wrap">
              <article className="contact-card">
                <h3>电话</h3>
                <p>
                  021-8888 6620
                  <br />
                  工作时间内快速确认档期
                </p>
              </article>
              <article className="contact-card">
                <h3>微信</h3>
                <p>
                  BubblePaws88
                  <br />
                  可发送宠物照片评估毛量
                </p>
              </article>
              <article className="contact-card">
                <h3>交通</h3>
                <p>
                  地铁 2 号线花园路站 3 号口
                  <br />
                  门口可临停 15 分钟
                </p>
              </article>
            </div>
            <div className="store-map" aria-label="门店地图">
              <iframe
                title="门店地图"
                src="https://www.openstreetmap.org/export/embed.html?bbox=121.459%2C31.264%2C121.491%2C31.286&layer=mapnik&marker=31.275%2C121.475"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>© 2026 泡泡爪印宠物洗护店 · 温柔洗护，认真照顾每一只小朋友</footer>
    </>
  );
}
