import { useFormik } from "formik"
import { useDeals } from "../../context/DealsContext"

export const FillDeals = () => {
    const { setDeals } = useDeals();

    const formik = useFormik({
        initialValues: {
            image: "",
            title: "",
            description: "",
            highlights: ["", "", ""],
            price: "",
            link: "",
        },
        onSubmit: (values, { resetForm }) => {
            setDeals(prevDeals => [...prevDeals, values])
            resetForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <h5>Image Url</h5>
                <input
                    type="text"
                    name="image"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <h5>Title</h5>
                <input
                    type="text"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <h5>Description</h5>
                <input
                    type="text"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                <h5>Highlights</h5>
                <input
                    type="text"
                    name="highlights[0]"
                    value={formik.values.highlights[0]}
                    onChange={formik.handleChange}
                />
                <input
                    type="text"
                    name="highlights[1]"
                    value={formik.values.highlights[1]}
                    onChange={formik.handleChange}
                />
                <input
                    type="text"
                    name="highlights[2]"
                    value={formik.values.highlights[2]}
                    onChange={formik.handleChange}
                />

                <h5>Price</h5>
                <input
                    type="text"
                    name="price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                />

                <h5>Link</h5>
                <input
                    type="text"
                    name="link"
                    value={formik.values.link}
                    onChange={formik.handleChange}
                />

                <button type="submit">Submit</button>
            </div>
        </form>
    )
}