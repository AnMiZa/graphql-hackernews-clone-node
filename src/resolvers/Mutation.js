const signup = async (parent, args, context, info) => {
  const password = await bcrypt.hash(args.password, 10)
}
