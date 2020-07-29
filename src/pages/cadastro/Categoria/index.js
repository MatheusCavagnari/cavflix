import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Button from '../../../components/Button';
import './index.css'


const Input = styled.input.attrs(props => ({

    type: "text",

    size: props.size || "1em",
}))`
    color: black;
    font-size: 1em;
    border-radius: 3px;
    background-color: #53585D;
    width: 100%;
    
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;

const Select = styled.select.attrs(props => ({
    size: props.size || "1em",
}))`
  width: 100%;
  padding: 16px 20px;
  border-radius: 3px;
  background-color: #53585D;
  font-size: 1em;

  margin: ${props => props.size};
  padding: ${props => props.size};

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  `;

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <form>

                <Input placeholder="Nome da Categoria" />
                <Select >
                    <option value="" hidden>
                        Type
                    </option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                </Select>
                <br />

                <nav className = "Cadastro">
                    <Link className="Logo" to="/">
                        Home
                    </Link>

                    <Button >
                        Cadastrar
                    </Button>
                </nav>

            </form>


        </PageDefault>
    );
}

export default CadastroCategoria;