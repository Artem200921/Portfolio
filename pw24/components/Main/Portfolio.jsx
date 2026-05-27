import React from "react";
import { PortfolioStyle } from "../styled-component/PortfolioStyle.js";

export class Portfolio extends React.Component {
  render() {
    const items = this.props.items || [];
    return (
      <PortfolioStyle id="portfolio" delay={this.props.delay}>
        <div className="container">
          <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: 1000, padding: '0 20px'}}>
            <h2>Portfolio</h2>
            <div>
              <button onClick={this.props.openMain}>Back</button>
            </div>
          </div>

          <div className="cards">
            {items.map((it, idx) => (
              <div className="card" key={it.id || idx}>
                {it.img && <img src={it.img} alt={it.description || it.title || 'project'} />}
                <div className="card-body">
                  <h3>{it.title || `Project ${idx + 1}`}</h3>
                  <p>{it.description || ''}</p>
                  {it.url && (
                    <a href={it.url} target="_blank" rel="noreferrer">
                      Show Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PortfolioStyle>
    );
  }
}

