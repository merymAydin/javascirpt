import React from 'react'

function PhotoGrid() {
  return (
    <>
        {/* First Photo Grid*/}
        <div className="w3-row-padding">
            <div className="w3-third w3-container w3-margin-bottom">
              <img
                src="/w3images/mountains.jpg"
                alt="Norway"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="w3-container w3-white">
                <p>
                  <b>Lorem Ipsum</b>
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla.
                </p>
              </div>
            </div>
            <div className="w3-third w3-container w3-margin-bottom">
              <img
                src="/w3images/lights.jpg"
                alt="Norway"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="w3-container w3-white">
                <p>
                  <b>Lorem Ipsum</b>
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla.
                </p>
              </div>
            </div>
            <div className="w3-third w3-container">
              <img
                src="/w3images/nature.jpg"
                alt="Norway"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="w3-container w3-white">
                <p>
                  <b>Lorem Ipsum</b>
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla.
                </p>
              </div>
            </div>
          </div>
          {/* Second Photo Grid*/}
          <div className="w3-row-padding">
            <div className="w3-third w3-container w3-margin-bottom">
              <img
                src="/w3images/p1.jpg"
                alt="Norway"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="w3-container w3-white">
                <p>
                  <b>Lorem Ipsum</b>
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla.
                </p>
              </div>
            </div>
            <div className="w3-third w3-container w3-margin-bottom">
              <img
                src="/w3images/p2.jpg"
                alt="Norway"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="w3-container w3-white">
                <p>
                  <b>Lorem Ipsum</b>
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla.
                </p>
              </div>
            </div>
            <div className="w3-third w3-container">
              <img
                src="/w3images/p3.jpg"
                alt="Norway"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="w3-container w3-white">
                <p>
                  <b>Lorem Ipsum</b>
                </p>
                <p>
                  Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
                  condimentum, porta lectus vitae, ultricies congue gravida diam
                  non fringilla.
                </p>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <div className="w3-center w3-padding-32">
            <div className="w3-bar">
              <a href="#" className="w3-bar-item w3-button w3-hover-black">
                «
              </a>
              <a href="#" className="w3-bar-item w3-black w3-button">
                1
              </a>
              <a href="#" className="w3-bar-item w3-button w3-hover-black">
                2
              </a>
              <a href="#" className="w3-bar-item w3-button w3-hover-black">
                3
              </a>
              <a href="#" className="w3-bar-item w3-button w3-hover-black">
                4
              </a>
              <a href="#" className="w3-bar-item w3-button w3-hover-black">
                »
              </a>
            </div>
          </div>
    </>
  )
}

export default PhotoGrid