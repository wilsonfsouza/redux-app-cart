import { useSelector } from "react-redux";

export function Cart() {
    const state = useSelector(state => state);
    console.log(state);

    return (
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>SubTotal</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    );
}