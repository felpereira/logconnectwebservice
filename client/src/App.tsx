import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface Resultado {
  timestamp: Date;
  message: string;
  logLevel: string;
}

function App() {
  const [text, setText] = useState<Resultado[]>([]);

  //UPdate
  useEffect(() => {});

  useEffect(() => {
    const fetchData = async () => {
      return await fazerRequisicao();
    };

    fetchData();
  }, []);

  async function fazerRequisicao(): Promise<any> {
    const urlDaRota = "http://localhost:3000/log";

    try {
      const resposta = await fetch(urlDaRota, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!resposta.ok) {
        throw new Error("Erro na requisição");
      }

      const dados = (await resposta.json()) as Resultado[];

      setText(dados.reverse());
      return dados;
    } catch (erro) {
      throw erro;
    }
  }

  async function fazerRequisicaoPost(): Promise<any> {
    const urlDaRota = "http://localhost:3000/log";

    try {
      const resposta = await fetch(urlDaRota, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Erro2",
          logLevel: "info",
          timestamp: new Date(),
        }),
      });

      if (!resposta.ok) {
        throw new Error("Erro na requisição");
      }

      const dados = await resposta.json();

      await fazerRequisicao();

      return dados;
    } catch (erro) {
      throw erro;
    }
  }

  const tableCellStyle: React.CSSProperties = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
  };

  const tableRowStyle: React.CSSProperties = {
    backgroundColor: "#f2f2f2",
  };

  return (
    <div className="App">
      <header className="App-header">
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={tableCellStyle}>Message</th>
              <th style={tableCellStyle}>Timestamp</th>
              <th style={tableCellStyle}>Log Level</th>
            </tr>
          </thead>
          <tbody>
            {text.map((x: Resultado) => {
              let date: Date = new Date(x.timestamp);

              // Formatando a data como "DD/MM/YYYY hh:mm"
              let formattedDate = date.toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              });
              let formattedTime = date.toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              });

              // Combinando data e hora
              let formattedDateTime = `${formattedDate} ${formattedTime}`;

              // Get the timestamp in milliseconds
              let timestampInMilliseconds: number = date.getTime();

              return (
                <tr key={timestampInMilliseconds}>
                  <td style={tableCellStyle}>{x.message}</td>
                  <td style={tableCellStyle}>{formattedDateTime}</td>
                  <td style={tableCellStyle}>{x.logLevel}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button
          onClick={() => {
            fazerRequisicaoPost();
          }}
        >
          CLICK
        </button>
      </header>
    </div>
  );
}

export default App;
