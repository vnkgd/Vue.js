(() => {
    "use strict";
    !function (e) {
        let t = new Image;
        t.onload = t.onerror = function () {
            !function (e) {
                let t = !0 === e ? "webp" : "no-webp";
                document.documentElement.classList.add(t)
            }(2 == t.height)
        }
            ,
            t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }();
    const e = document.querySelector(".overlay");
    function t() {
        e.classList.remove("active");
        const t = document.querySelector(".project__popup");
        t.classList.contains("active") && t.classList.remove("active"),
            document.documentElement.classList.contains("menu-open") && document.documentElement.classList.remove("menu-open")
    }
    e.addEventListener("click", t),
        document.addEventListener("click", (function (n) {
            if (n.target.closest(".icon-menu")) {
                const n = document.querySelector(".project__popup");
                n && n.classList.contains("active") && t(),
                    document.documentElement.classList.toggle("menu-open"),
                    e.classList.toggle("active")
            }
        }
        ));
    const n = window.location.pathname.slice(1, window.location.pathname.indexOf("."))
        , i = window.localStorage
        , s = document.querySelector(".hero-sub")
        , a = document.querySelector(".services__container");
    function o(e) {
        const t = e.target.closest(".item-services");
        if (!t)
            return;
        const n = t.querySelector(".item-services__title").textContent;
        i.setItem("service", n),
            location.href = "service.html"
    }
    const m = document.querySelector(".projects__filters")
        , c = document.querySelectorAll(".projects__filter");
    function r(e) {
        const t = document.querySelector(".projects__empty")
            , n = [...document.querySelectorAll(".projects__item")];
        n.forEach((t => {
            t.style.display = "none",
                t.dataset.filter === e && (t.style.display = "block")
        }
        ));
        const i = !n.some((e => "block" === e.style.display));
        t.style.display = i ? "block" : "none"
    }
    function l(e) {
        const t = e.target.closest(".projects__filter")
            , n = t.textContent.toLowerCase();
        c.forEach((e => {
            e.classList.remove("active")
        }
        )),
            t.classList.add("active"),
            r(n)
    }
    const d = document.querySelector(".projects__items");
    function u(e) {
        const t = e.target.closest(".item-project");
        if (!t)
            return;
        const n = t.querySelector(".item-project__name").textContent;
        i.setItem("project", n),
            location.href = "project.html"
    }
    const _ = document.querySelector(".project__pop")
        , v = document.querySelector(".project__image>picture>img");
    _?.addEventListener("click", (function () {
        const t = document.querySelector(".project__popup");
        t.classList.toggle("active"),
            t.querySelector("img").src = v.src,
            e.classList.toggle("active")
    }
    ));
    const p = {
        levi: {
            name: "Charlotte Levi",
            job: "Designer",
            photo: "team-member-levi",
            skills: {
                design: "65%",
                management: "95%",
                satisfaction: "75%"
            }
        },
        julie: {
            name: "Nattasha Julie",
            job: "Designer",
            photo: "team-member-julie",
            skills: {
                design: "65%",
                management: "90%",
                satisfaction: "70%"
            }
        },
        smith: {
            name: "John Smith",
            job: "Designer",
            photo: "team-member-smith",
            skills: {
                design: "70%",
                management: "85%",
                satisfaction: "70%"
            }
        },
        owen: {
            name: "Nora Owen",
            job: "Designer",
            photo: "team-member-owen",
            skills: {
                design: "60%",
                management: "95%",
                satisfaction: "80%"
            }
        },
        jackson: {
            name: "Avery Jackson",
            job: "Designer",
            photo: "team-member-jackson",
            skills: {
                design: "80%",
                management: "70%",
                satisfaction: "70%"
            }
        },
        levi: {
            name: "Charlotte Levi",
            job: "Designer",
            photo: "team-member-levi",
            skills: {
                design: "65%",
                management: "95%",
                satisfaction: "75%"
            }
        },
        carter: {
            name: "Sofia Carter",
            job: "Designer",
            photo: "team-member-carter",
            skills: {
                design: "90%",
                management: "65%",
                satisfaction: "80%"
            }
        },
        james: {
            name: "Luna\tJames",
            job: "Designer",
            photo: "team-member-james",
            skills: {
                design: "50%",
                management: "100%",
                satisfaction: "65%"
            }
        },
        mateo: {
            name: "Gianna\tMateo",
            job: "Designer",
            photo: "team-member-mateo",
            skills: {
                design: "70%",
                management: "65%",
                satisfaction: "90%"
            }
        },
        current: ""
    };
    function g(e) {
        const t = e.target.closest(".item-team");
        if (!t)
            return;
        const n = t.querySelector(".item-team__name").textContent.split(" ")[1].toLowerCase();
        p.current = n,
            i.setItem("team", JSON.stringify(p)),
            location.href = "team-member.html"
    }
    i.getItem("team") || i.setItem("team", JSON.stringify(p));
    const f = document.querySelector(".blog__items");
    function b(e) {
        const t = e.target.closest(".item-blog");
        if (!t)
            return;
        const n = t.querySelector(".item-blog__title").textContent
            , s = t.querySelector(".item-blog__date").textContent
            , a = t.querySelector(".item-blog__image>picture>img").src
            , o = {
                title: n,
                date: s,
                src: `../img/blog/post-${a.slice(a.lastIndexOf("/") + 1, a.lastIndexOf("."))}.jpg`,
                tag: t.querySelector(".item-blog__label").textContent.split(" ")[0].toLowerCase()
            };
        i.setItem("post", JSON.stringify(o)),
            location.href = "post.html"
    }
    a?.addEventListener("click", o),
        d?.addEventListener("click", u),
        f?.addEventListener("click", b),
        "projects" === n && (m.addEventListener("click", l),
            r("bedroom")),
        "project" === n && function () {
            const e = document.querySelector(".project__title")
                , t = i.getItem("project");
            e.textContent = `${t}s`
        }(),
        ("team" === n || "about" === n) && document.querySelector("team" === n ? ".team__items" : ".team-about__items").addEventListener("click", g),
        "team-member" === n && function () {
            const e = JSON.parse(i.getItem("team")).current
                , t = p[e]
                , n = document.querySelector(".team-member");
            document.querySelector(".current-page__name").textContent = t.name;
            const s = t.name.split(" ").join("").toLowerCase()
                , a = `\n  <div class="team-member__container">\n     <div class="team-member__general">\n       <div class="team-member__image">\n         <img src="../img/team/${t.photo}.jpg" alt="photo" />\n       </div>\n       <div class="team-member__content">\n         <h2 class="team-member__name">${t.name}</h2>\n         <div class="team-member__job">${t.job}</div>\n         <div class="team-member__text">\n           <p>\n             Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae\n             turpmaximus.posuere in.Contrpobelie frandomised words which\n             don't look even slightly believable.\n           </p>\n         </div>\n         <div class="team-member__info info-actions">\n           <div class="info-actions__email info-actions__item">\n             <div>\n               <img src="../img/icons/mail.svg" alt="icon" />\n             </div>\n             <a href="#">${s}@interno.com</a>\n           </div>\n           <div class="info-actions__phone info-actions__item">\n             <div>\n               <img src="../img/icons/phone.svg" alt="icon" />\n             </div>\n             <a href="#">+1 (378) 400-1234</a>\n           </div>\n           <div class="info-actions__link info-actions__item">\n             <div>\n               <img src="../img/icons/globe.svg" alt="icon" />\n             </div>\n             <a href="#">www.${s}.com</a>\n           </div>\n           <div class="info-actions__social social">\n             <a\n               href="#"\n               class="social__link fa-brands fa-facebook-f"\n             ></a>\n             <a href="#" class="social__link fa-brands fa-twitter"></a>\n             <a\n               href="#"\n               class="social__link fa-brands fa-linkedin-in"\n             ></a>\n             <a href="#" class="social__link fa-brands fa-instagram"></a>\n           </div>\n         </div>\n       </div>\n     </div>\n     <div class="team-member__biography member-biography">\n       <h2 class="member-biography__title">Short Biography​</h2>\n       <div class="member-biography__text">\n         <p>\n           Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae\n           turpmaximus.posuere in.Contrary to popular belief.There are\n           many variations of passages of Lorem Ipsum available, but the\n           majority have suffered alteration in some form, njecthumour\n           randomised words which don't look even slightly believable.\n         </p>\n         <p>\n           Embarrassing hidden in the middle of text. All the Lorem Ipsum\n           generators on the Internet tend to repeat predefined but the\n           majority have suffered alteration in some form chunks as\n           necessary.\n         </p>\n       </div>\n       <div class="member-biography__info">\n         <div class="member-biography__skills member-skills">\n           <h4 class="member-skills__title">\n             Simplicity and Functionality\n           </h4>\n           <div class="member-skills__text">\n             <p>\n               Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem\n               vitae turpmaximus.posuere in belief.\n             </p>\n             <p>\n               There are many variations of passages of Lorem Ipsum from\n               available, but the majority have suffered alteration in\n               some form, njecthumour.\n             </p>\n           </div>\n           <div class="member-skills__items">\n             <div class="member-skills__item skills-item">\n               <div class="skills-item__info">\n                 <div class="skills-item__name">Project Design</div>\n                 <div class="skills-item__percents" style="--percents: ${t.skills.design}">${t.skills.design}</div>\n               </div>\n               <div class="skills-item__bar" style="--percents: ${t.skills.design}"></div>\n             </div>\n             <div class="member-skills__item skills-item">\n               <div class="skills-item__info">\n                 <div class="skills-item__name">Team Management</div>\n                 <div class="skills-item__percents" style="--percents: ${t.skills.management}">${t.skills.management}</div>\n               </div>\n               <div class="skills-item__bar" style="--percents: ${t.skills.management}"></div>\n             </div>\n             <div class="member-skills__item skills-item">\n               <div class="skills-item__info">\n                 <div class="skills-item__name">Client Satisfaction</div>\n                 <div class="skills-item__percents" style="--percents: ${t.skills.satisfaction}">${t.skills.satisfaction}</div>\n               </div>\n               <div class="skills-item__bar" style="--percents: ${t.skills.satisfaction}"></div>\n             </div>\n           </div>\n         </div>\n         <div class="member-biography__faq member-faq">\n           <h4 class="member-faq__title">Qustion And Answer</h4>\n           <div class="member-faq__text">\n             <p>\n               Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem\n               vitae turpmaximus.posuere in.\n             </p>\n           </div>\n           <div class="member-faq__items">\n             <div class="member-faq__item faq-item">\n               <div class="faq-item__title">\n                 Website & Mobile App Design?\n               </div>\n               <div class="faq-item__text">\n                 Lorem ipsum dolor sit amet, adipiscing fromAliquam eu\n                 sem turpmaximus.\n               </div>\n             </div>\n             <div class="member-faq__item faq-item">\n               <div class="faq-item__title">\n                 How to Easy Successful Projects?\n               </div>\n               <div class="faq-item__text">\n                 Lorem ipsum dolor sit amet, adipiscing fromAliquam eu\n                 sem turpmaximus.\n               </div>\n             </div>\n             <div class="member-faq__item faq-item">\n               <div class="faq-item__title">\n                 International Trade Experience?\n               </div>\n               <div class="faq-item__text">\n                 Lorem ipsum dolor sit amet, adipiscing fromAliquam eu\n                 sem turpmaximus.\n               </div>\n             </div>\n           </div>\n         </div>\n       </div>\n     </div>\n    </div>\n  `;
            n.innerHTML = a,
                document.querySelector(".team-about__title").textContent = "Our Team Members",
                document.querySelector(".contact-project__title").textContent = "Contact Me"
        }(),
        "post" === n && function () {
            const e = document.querySelector(".post-main__title")
                , t = document.querySelector(".post-main__date")
                , n = document.querySelector(".post-main__image>picture>img")
                , s = document.querySelector(".post-main__image>picture>source")
                , a = document.querySelectorAll(".nav-tags__item")
                , o = document.querySelector(".post-tags__item.active")
                , m = document.querySelector(".contact__title")
                , c = JSON.parse(i.getItem("post"));
            e.textContent = c.title,
                t.textContent = c.date,
                n.src = c.src,
                s.srcset = c.src,
                a.forEach((e => {
                    e.textContent.toLowerCase() === c.tag ? e.classList.add("active") : e.classList.remove("active")
                }
                )),
                o.textContent = c.tag.charAt(0).toUpperCase() + c.tag.slice(1),
                m.textContent = "Leave a Reply"
        }(),
        function () {
            if (s) {
                const e = s.dataset.page;
                //тут чёт не так отрабатывало... отключил
                // s.style.background = `url("../img/hero/${e}.jpg")`;
                const t = document.querySelector(".current-page")
                    , i = document.querySelector(".current-page__name");
                if ("service" === n) {
                    const e = localStorage.getItem("service");
                    i.textContent = e
                }
                "project" === n && (t.style.display = "none"),
                    "post" === n && (t.style.display = "none")
            }
        }(),
        function () {
            const e = document.querySelectorAll(".accordion");
            e.forEach((t => {
                t.addEventListener("click", (() => {
                    e.forEach((e => {
                        t !== e && e.classList.remove("active")
                    }
                    )),
                        t.classList.toggle("active")
                }
                ))
            }
            ))
        }(),
        function () {
            const e = document.querySelectorAll(".faq-item");
            e.forEach((t => {
                t.addEventListener("click", (() => {
                    e.forEach((e => {
                        t !== e && e.classList.remove("active")
                    }
                    )),
                        t.classList.toggle("active")
                }
                ))
            }
            ))
        }()
}
)();