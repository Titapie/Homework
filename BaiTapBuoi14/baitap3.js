function classifyUser(user) {
    const displayName = user.name || "Ẩn danh";
    const isAdult = user.age >= 18;
    const hasEmail = Boolean(user.email);
    const role = user.role ?? "guest";
    let status;
    if (user.score >= 80) {
        status = "vip";
    } else if (user.score >= 50) {
        status = "normal";
    } else {
        status = "new";
    }
    const canAccess = isAdult && role !== "guest";
    return {
        displayName,
        isAdult,
        hasEmail,
        role,
        status,
        canAccess
    };
}