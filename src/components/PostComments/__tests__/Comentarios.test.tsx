import { fireEvent, render, screen } from "@testing-library/react";
import PostComents from "../index";
import { debug } from "console";

describe("Teste para comentarios", () => {
    test("Deve criar a insercao de um dos dois comentarios", () => {
        render(<PostComents />);
        fireEvent.change(screen.getByTestId("campo-comentario"), {
            target: {
                value: "testando jest",
            },
        });
        fireEvent.click(screen.getByTestId("btn-comentario"));

        fireEvent.change(screen.getByTestId("campo-comentario"), {
            target: {
                value: "testando jest 2",
            },
        });
        fireEvent.click(screen.getByTestId("btn-comentario"));
        expect(screen.getByText("testando jest")).toBeInTheDocument();
        expect(screen.getByText("testando jest 2")).toBeInTheDocument();
    });
});
