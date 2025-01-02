import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const modalData = [
    { id: 1, title: 'Iniquity', body: 'images/portfolio/iniquityall.webp', img: 'images/portfolio/iniquity.png' }, // Exemplo de conteúdo incompleto
    { id: 2, title: 'Telecel', body: 'images/portfolio/telecelAll.webp', img: 'images/portfolio/telecel.png' },
    { id: 3, title: 'Síclica', body: 'images/portfolio/siclicaAll.webp', img: 'images/portfolio/siclica.png' }, // Exemplo de conteúdo incompleto
    { id: 4, title: 'Mercurio App', body: 'images/portfolio/mercurioappfull.webp', img: 'images/portfolio/mercurioapp.png' }, // Exemplo de conteúdo incompleto
    { id: 5, title: 'Avizum', body: 'images/portfolio/avizumAll.webp', img: 'images/portfolio/avizum.png' },
    { id: 6, title: 'Rio Frete', body: 'images/portfolio/riofretefull.webp', img: 'images/portfolio/riofrete.png' }, // Exemplo de conteúdo incompleto
  ];

  const [activeContent, setActiveContent] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setActiveContent(null);
    setShow(false);
  };

  const handleShow = (content) => {
    if (content.title && content.body && content.img) {
      setActiveContent(content);
      setShow(true);
    }
  };

  const hasCompleteData = (modal) =>
    modal.title && modal.body && modal.img;

  return (
    <>
      <div className='port-wrap'>
        {modalData.map((modal) => (
          <div
          className={`card-port ${hasCompleteData(modal) ? 'ativo' : ''}`}
            key={modal.id}
            variant="primary"
            onClick={() => handleShow(modal)}
          >
            {modal.img ? (
              <img src={modal.img} alt={modal.title || 'Portfolio Item'} />
            ) : (
              <div className="coming-soon">Coming Soon</div>
            )}
          </div>
        ))}
      </div>

      <Modal className='my-modal' size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='titulo-padrao'>{activeContent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={activeContent?.body} alt={activeContent?.title} />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
