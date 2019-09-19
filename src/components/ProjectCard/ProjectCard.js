import React from "react";

// import "./ProjectsSection.scss";

const ProjectCard = ({ cardThumbnailImg, cardTitle, cardSubtitle, cardDesc, cardDate, dateTime }) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-3by2">
                    <img src={cardThumbnailImg} alt={cardTitle} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media margin-bottom-0point5">
                    <div className="media-content">
                        <p className="title is-5 has-text-weight-normal">{cardTitle}</p>
                        <p className="subtitle is-7 has-text-weight-light">{cardSubtitle}</p>
                    </div>
                </div>
                <div className="content">
                    {cardDesc}
                    <br />
                    <time dateTime={dateTime} className="is-size-7">{cardDate}</time>
                </div>
            </div>
        </div>
    );
}

ProjectCard.defaultProps = {
    cardThumbnailImg: 'NIL',
    cardTitle: 'Deco Transactional - Back Office',
    cardSubtitle: 'Front End Architect',
    cardDesc: 'A complete CMS based Backoffice system that enables designers to create multiple projects and campaigns across countries',
    cardDate: 'January 2019 - Current',
    dateTime: '2019-1-1'
}

export default ProjectCard;
