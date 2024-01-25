import banner from '../assets/images/banneryeni.jpg';

function About() {
  return (
    <>
      <section id="about">
        <img className="w-full mb-10" src={banner} alt="burger about" />
        <div className="content flex flex-col item-center gap-10 mb-10">
          <h1 className="text-6xl text-center font-bold tracking-wider">Hakkımızda</h1>
          <div className="desc">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga facere iusto, tempora placeat culpa vel
              vitae minus earum quibusdam inventore soluta ipsa iste sequi nobis enim ea illo est eius! Ipsum animi
              asperiores molestias vero recusandae. Et blanditiis saepe quae architecto accusamus modi optio? Iste hic
              fuga vero nam voluptas.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga facere iusto, tempora placeat culpa vel
              vitae minus earum quibusdam inventore soluta ipsa iste sequi nobis enim ea illo est eius! Ipsum animi
              asperiores molestias vero recusandae. Et blanditiis saepe quae architecto accusamus modi optio? Iste hic
              fuga vero nam voluptas.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga facere iusto, tempora placeat culpa vel
              vitae minus earum quibusdam inventore soluta ipsa iste sequi nobis enim ea illo est eius! Ipsum animi
              asperiores molestias vero recusandae. Et blanditiis saepe quae architecto accusamus modi optio? Iste hic
              fuga vero nam voluptas.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga facere iusto, tempora placeat culpa vel
              vitae minus earum quibusdam inventore soluta ipsa iste sequi nobis enim ea illo est eius! Ipsum animi
              asperiores molestias vero recusandae. Et blanditiis saepe quae architecto accusamus modi optio? Iste hic
              fuga vero nam voluptas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
