const notFound = (req, res) => {
    res.status(404).json({ message: `Not Found - ${req.originalUrl}` });
}


const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // Check for Mongoose bad ObjectId
    if (err.name === 'CastError' && err.kind === 'ObjectId') {
        message = 'Resource not found';
        statusCode = 404;
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'development' ? null : err.stack,
    });
};

export { notFound, errorHandler };
